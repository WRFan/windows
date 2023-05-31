@echo off
cls

REM --------------------------------------------------------------------------- storage
call delin "cache\default\indexeddb"

REM ---------------------------------------------------------------------------
call delin "cache\grshadercache"
call delin "cache\shadercache"

call delin "cache\default\databases"
call delin "cache\default\extension state"
call delin "cache\default\service worker"
call delin "cache\default\cache"
call delin "cache\default\gpucache"
call delin "cache\default\shared_proto_db"
call delin "cache\default\session storage__tmp_for_rebuild"
call delin "cache\default\dawncache"
call delin "cache\default\webstorage"

REM -> lock + log

for /r "cache" %%i in (*.bak *.msbak *.old *.tmp) do (

	echo %%i

	del "%%i"
)

goto :eof
