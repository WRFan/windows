'inputbox "", "", wscript.arguments.count

' https://peter.sh/experiments/chromium-command-line-switches

' -disable-webrtc-encryption
' -single-process
' -check-for-update-interval=31536000
' -simulate-outdated
' -simulate-outdated-no-au
' -simulate-upgrade
' -simulate-critical-update

' config -> Disable site isolation
' -disable-features=site-per-process
' -user-agent='AdsBot-Google'

' -unsafely-treat-insecure-origin-as-secure=http://192.168.0.21,http://local.ptron,https://local.ptron

' -user-data-dir=%programfiles%\edge\cache

' for google maps -> -disable-remote-fonts must be off + fonts.gstatic.com must be accessible

' -enable-experimental-web-platform-features -> selection not visible in devtools

' -in-process-gpu -> DO NOT USE !!!

sArgs = "-disable-remote-fonts -disable-top-sites -disable-cookie-encryption -disable-checking-companion-user-permissions -disable-auto-reload -disable-extensions-file-access-check -disable-signin-scoped-device-id -disable-domain-reliability -disable-usb-keyboard-detect -disable-quick-answers-v2-translation -disable-breakpad -disable-popup-blocking -site-isolation-trial-opt-out -disable-site-isolation-trials -disable-site-isolation-for-policy -disable-crash-reporter -allow-file-access-from-files -test-type -process-per-site -disable-web-security -allow-insecure-localhost -allow-cross-origin-auth-prompt -disable-backing-store-limit -disable-in-process-stack-traces -disable-gpu-watchdog -disable-hang-monitor -disable-ipc-flooding-protection -disable-logging -disable-notifications -disable-speech-api -enable-experimental-cookie-features -enable-experimental-webassembly-features -enable-ftp -enable-network-information-downlink-max -enable-webgl-draft-extensions -javascript-harmony -enable-unsafe-fast-js-calls -allow-no-sandbox-job -ignore-certificate-errors -disable-timeouts-for-profiling -disable-oopr-debug-crash-dump -enable-accessibility-object-model -disable-legacy-window -font-cache-shared-handle -silent-debugger-extension-api -disable-gpu-sandbox -no-sandbox -noerrdialogs -disable-component-update -simulate-outdated -disable-features=msShowReadAloudIconInAddressBar,IsolateOrigins -user-data-dir=%programfiles%\edge\cache"

if wscript.arguments.count > 0 then
	sArgs = sArgs & " " & chr(34) & wscript.arguments(0) & chr(34)
end if

set activex = createobject("shell.application")

activex.shellexecute "c:\program files\edge\msedge", sArgs, "", "", 3
