# email-queue-microservice
This microservice helps send emails in the background instead of making users wait. When something like a signup or order happens, it adds the email to a queue. The service picks it up and sends the email without slowing down the main app. It works quietly in the background to improve performance and reliability.
