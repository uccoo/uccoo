@echo off
setlocal enabledelayedexpansion

rem 设置目标目录和文件数量
set "target_directory=hainmu"
set "number_of_files=3"

rem 创建目标目录
if not exist "%target_directory%" mkdir "%target_directory%"

rem 循环创建 HTML 文件
for /l %%i in (1, 1, %number_of_files%) do (
    set "file_name=%target_directory%\file_%%i.html"
    (
        echo ^<!DOCTYPE html^>
        echo ^<html lang="en"^>
        echo ^<head^>
        echo. 
        echo. 
        echo ^<meta charset="UTF-8"^>
        echo ^<title^>File %%i^</title^>
        echo ^</head^>
        echo. 
        echo ^<body^>
        echo ^<h2^>Content of File %%i^</h2^>
        echo ^<p^>This is the content of HTML file %%i.^</p^>
        echo ^</body^>
        echo ^</html^>
    ) > "!file_name!"
)

echo %number_of_files% HTML files created in the '%target_directory%' directory.
