 Write-Output "Requesting administrator privileges"
  $User = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
  $UserName = [Environment]::UserName
  $Script = $MyInvocation.MyCommand.Path
  Start-Process cmd.exe -Verb RunAs "-ExecutionPolicy RemoteSigned -File `"$PSCommandPath`" `"${User}`" `"${UserName}`""
  exit
