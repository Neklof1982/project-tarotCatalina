import * as React from 'react'

interface EmailTemplateProps {
    firstName: string
    email: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, email, message
}) => (
    <div>
        <h1>Mail enviado de: {firstName}</h1>
        <h2>Correo de contacto: {email}</h2>
        <h3>Mensaje: {message}</h3>
    </div>
)