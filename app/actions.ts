"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData) {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const jobTitle = formData.get("jobTitle") as string
    const teamSize = formData.get("teamSize") as string
    const message = formData.get("message") as string
    const selectedDate = formData.get("selectedDate") as string
    const selectedTime = formData.get("selectedTime") as string

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    })

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "promediahousemw@gmail.com", // Sending to self/admin
        subject: `New Consultation Request from ${firstName} ${lastName} at ${company}`,
        text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Job Title: ${jobTitle}
      Team Size: ${teamSize}
      
      Requested Time: ${selectedDate ? `${selectedDate} at ${selectedTime}` : "Not selected"}
      
      Message:
      ${message}
    `,
        html: `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Team Size:</strong> ${teamSize}</p>
      <p><strong>Requested Time:</strong> ${selectedDate ? `${selectedDate} at ${selectedTime}` : "Not selected"}</p>
      <br>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
    }

    try {
        await transporter.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error("Error sending email:", error)
        return { success: false, error: "Failed to send email" }
    }
}
