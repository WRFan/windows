' HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings

' ProxyServer

' ProxyEnable

set WriteReg = GetObject("winmgmts:\\.\root\default:StdRegProv")

WriteReg.GetStringValue &H80000002, "SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings", "ProxyServer", bKey

'inputbox "", "", bKey

' http=127.0.0.1:89;https=127.0.0.1:89
' http=192.168.0.13:89;https=192.168.0.13:89

' aArray:
' 0 -> http=127.0.0.1
' 1 -> 89;https=127.0.0.1
' 2 -> 89

' aArray2:
' 0 -> 89
' 1-> https=127.0.0.1

aArray = split(bKey, ":")

aArray2 = split(aArray(1), ";")

sNewProxy = aArray(0) & ":"

if aArray(2) = 89 then
	'inputbox "", "", aArray2(1)

	sPort = "88"
else
	sPort = "89"
end if

sNewProxy = sNewProxy & sPort & ";" & aArray2(1) & ":" & sPort

'inputbox "", "", sNewProxy

WriteReg.SetStringValue &H80000002, "SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings", "ProxyServer", sNewProxy

set activex = wscript.createobject("DynamicWrapperX")

' Const HWND_BROADCAST = &HFFFF
' Const WM_SETTINGCHANGE = &H001A

' SendNotifyMessage(HWND_BROADCAST, WM_SETTINGCHANGE, (WPARAM)(0), (LPARAM)(0))

' HWND_BROADCAST -> ((HWND)0xffff)

' WM_SETTINGCHANGE -> 0x001A = 26

' WPARAM -> UINT_PTR

' LPARAM -> LONG_PTR

' activex.register "user32", "SendNotifyMessageW", "i=huqm"

' activex.SendNotifyMessageW HWND_BROADCAST, WM_SETTINGCHANGE, 0, 0

'##############################################################################
' InternetSetOption(IntPtr.Zero, INTERNET_OPTION_PROXY, intptrStruct, Marshal.SizeOf(struct_IPI));

' INTERNET_OPTION_PROXY -> 38
' INTERNET_OPTION_REFRESH -> 37
' INTERNET_OPTION_SETTINGS_CHANGED -> 39

' Buf = activex.StrPtr("192.168.0.13:88", "w")

activex.register "wininet", "InternetSetOptionW", "i=hupu"

' activex.InternetSetOptionW 0, 38, Buf, 16

activex.InternetSetOptionW 0, 39, 0, 0