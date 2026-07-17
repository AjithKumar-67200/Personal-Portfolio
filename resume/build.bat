@echo off
setlocal
set RESUME_DIR=%~dp0
set TECTONIC=%RESUME_DIR%tools\tectonic.exe
set TEX=%RESUME_DIR%resume.tex

if not exist "%TECTONIC%" (
  echo Tectonic not found. Download it to resume\tools\tectonic.exe first.
  exit /b 1
)

"%TECTONIC%" --outdir "%RESUME_DIR%" "%TEX%"
if errorlevel 1 exit /b 1

copy /Y "%RESUME_DIR%resume.pdf" "%RESUME_DIR%Ajith_Kumar_S_Resume.pdf" >nul
echo Built %RESUME_DIR%Ajith_Kumar_S_Resume.pdf
