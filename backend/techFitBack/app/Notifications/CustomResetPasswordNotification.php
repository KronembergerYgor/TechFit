<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as ResetPasswordBase;
use App\Mail\ResetPasswordMail;

class CustomResetPasswordNotification extends ResetPasswordBase
{
    public function toMail($notifiable)
    {
        $url = $this->resetUrl($notifiable);

        return (new ResetPasswordMail($url, $notifiable->name))
            ->to($notifiable->getEmailForPasswordReset());
    }
}