'inputbox "", "", wscript.arguments.count

' https://peter.sh/experiments/chromium-command-line-switches

' https://niek.github.io/chrome-features/

' -disable-webrtc-encryption
' -site-per-process
' -force-app-mode
' -disable-prompt-on-repost
' -no-experiments
' -restart
' -disable-domain-action-user-agent-override
' -enable-automation
' -enable-experimental-web-platform-features -> selection not visible in devtools
' -single-process -> DO NOT USE !!!
' -in-process-gpu -> DO NOT USE !!!

' -custom-devtools-frontend=file://XXX/devtools_app.html

' -check-for-update-interval=31536000
' -simulate-outdated <- this one if edge prompts for updates
' -simulate-outdated-no-au
' -simulate-upgrade
' -simulate-critical-update

' -blink-settings
' -disable-blink-features=

' -user-agent='AdsBot-Google'

' -unsafely-treat-insecure-origin-as-secure=http://192.168.0.21,http://local.ptron,https://local.ptron

' --user-data-dir MUST have two hyphens (--), otherwise it may cause probs on some versions !!!

' --profile-directory=%programfiles%\edge\cache
' --user-data-dir=%programfiles%\edge\cache

' -disable-remote-fonts -> for google maps must be off + fonts.gstatic.com must be accessible !!!

' -disable-extensions-file-access-check -> breaks Extensions "Zugriff auf Daten URLs" !!!

' -single-argument

' Causes problems on cloudflare checks -> must be OFF:

	' Disable site isolation must be OFF in flags -> site-isolation-trial-opt-out

	' -disable-site-isolation-trials

' -user-gesture-required
' -no-user-gesture-required

' -disable-gpu
' -disable-gpu-compositing

sArgs = "-disable-remote-fonts -disable-gpu-watchdog -internet-explorer-integration=none -start-maximized -no-pings -disable-prerender-ntp -shared-array-buffer-unrestricted-access-allowed -disable-extensions-http-throttling -disable-back-forward-cache -disable-background-networking -no-first-run -disable-default-apps -no-default-browser-check -disable-sync -allow-running-insecure-content -allow-legacy-extension-manifests -allow-future-manifest-version -allow-external-pages -disable-image-animation-resync -hide-crash-restore-bubble -ignore-autocomplete-off-autofill -disable-top-sites -disable-cookie-encryption -disable-checking-companion-user-permissions -disable-auto-reload -disable-signin-scoped-device-id -disable-domain-reliability -disable-usb-keyboard-detect -disable-quick-answers-v2-translation -disable-breakpad -disable-popup-blocking -disable-site-isolation-trials -disable-site-isolation-for-policy -disable-crash-reporter -allow-file-access-from-files -test-type -process-per-site -disable-web-security -allow-insecure-localhost -allow-cross-origin-auth-prompt -disable-backing-store-limit -disable-in-process-stack-traces -disable-hang-monitor -disable-ipc-flooding-protection -disable-logging -disable-notifications -disable-speech-api -enable-experimental-cookie-features -enable-experimental-webassembly-features -enable-ftp -enable-network-information-downlink-max -enable-webgl-draft-extensions -javascript-harmony -enable-unsafe-fast-js-calls -allow-no-sandbox-job -ignore-certificate-errors -disable-timeouts-for-profiling -disable-oopr-debug-crash-dump -enable-accessibility-object-model -disable-legacy-window -font-cache-shared-handle -silent-debugger-extension-api -disable-gpu-sandbox -no-sandbox -noerrdialogs -disable-component-update -disable-features=IsolateOrigins,msReadAloud,msShowReadAloudIconInAddressBar,BackForwardCache,msDownloadsHub,msUndersideButton,msHubApps,msEdgeCaretBrowsing,msEdgeCitations,GlobalMediaControlsPictureInPicture,msEdgeTabGroups,PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies,msSmartscreenProtection -enable-features=GlobalMediaControlsModernUI"

if wscript.arguments.count > 0 then
	sArgs = sArgs & " " & chr(34) & wscript.arguments(0) & chr(34)
end if

set activex = createobject("shell.application")

' set activex2 = wscript.createobject("wscript.shell")

' SpecialPath = activex2.expandenvironmentstrings("%programfiles%")

activex.shellexecute "c:\program files\edge\msedge", sArgs, "", "", 3