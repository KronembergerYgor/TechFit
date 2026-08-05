<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 30px 0; margin: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="padding: 30px; text-align: center; background-color: #f9f9f9;">
        <img src="{{ $message->embed(public_path('img/LogoCompleta.png')) }}" style="max-height: 60px;" alt="TechFit">
      </td>
    </tr>
    <tr>
      <td style="padding: 30px 40px 40px 40px;">
        <h2 style="color: #333; margin-top: 0;">Olá, {{ $userName }}!</h2>
        <p style="color: #555; line-height: 1.5;">
          Recebemos uma solicitação para redefinir sua senha no TechFit.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="{{ $url }}" style="background-color: #db8300; color: #ffffff; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;">
            Redefinir senha
          </a>
        </div>
        <p style="color: #888; font-size: 13px;">Esse link expira em 60 minutos.</p>
        <p style="color: #888; font-size: 13px;">Se você não solicitou isso, pode ignorar este e-mail.</p>
        <p style="color: #333; margin-top: 20px;">Equipe TechFit</p>
      </td>
    </tr>
  </table>
</body>
</html>