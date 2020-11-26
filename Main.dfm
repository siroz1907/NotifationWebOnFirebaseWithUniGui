object MainForm: TMainForm
  Left = 0
  Top = 0
  ClientHeight = 299
  ClientWidth = 635
  Caption = 'MainForm'
  OldCreateOrder = False
  MonitoredKeys.Keys = <>
  PixelsPerInch = 96
  TextHeight = 13
  object UniButton1: TUniButton
    Left = 104
    Top = 72
    Width = 153
    Height = 89
    Hint = ''
    Caption = 'UniButton1'
    TabOrder = 0
    ClientEvents.ExtEvents.Strings = (
      
        'click=function click(sender, e, eOpts)'#13#10'{'#13#10'  console.log("1");'#13#10 +
        '  notifyMe();'#13#10'  console.log("2");'#13#10'}')
  end
end
