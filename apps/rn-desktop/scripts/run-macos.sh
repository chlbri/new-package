#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "error: $1" >&2
  echo "Install Xcode (App Store or developer.apple.com), then run:" >&2
  echo "  sudo xcode-select -s /Applications/Xcode.app/Contents/Developer" >&2
  exit 1
}

# `pod install` and `xcodebuild` resolve SDKs through xcrun, which uses the
# developer directory selected by `xcode-select`. When only the Command Line
# Tools are selected, xcrun cannot find the iOS/macOS SDKs and pod install fails
# while configuring glog ("C compiler cannot create executables"), so fall back
# to an installed Xcode.
developer_dir="${DEVELOPER_DIR:-}"
if [ -z "$developer_dir" ]; then
  selected="$(xcode-select -p 2>/dev/null || true)"
  case "$selected" in
    *.app/Contents/Developer) developer_dir="$selected" ;;
    *)
      for candidate in /Applications/Xcode*.app/Contents/Developer; do
        [ -d "$candidate" ] || continue
        developer_dir="$candidate"
        break
      done
      ;;
  esac
fi

[ -n "$developer_dir" ] || fail "no Xcode installation found."

if ! DEVELOPER_DIR="$developer_dir" xcrun --sdk macosx --show-sdk-path >/dev/null 2>&1; then
  fail "no usable macOS SDK in $developer_dir."
fi

export DEVELOPER_DIR="$developer_dir"
exec expo-desktop run macos "$@"
