Coding Challenge

Welcome to the 9Digital Coding Challenge! To complete this challenge, you will need to write and deploy a small JSON-based web service, and provide us the URL to your solution. Note: as this is also an exercise in set-up and deployment, please don't solve this by adding an endpoint to an existing app or servcie. Your service should be standalone and deployed at a root path e.g. http://myservice.somedomain.com/

You can take as long as you need to submit your solution. We expect production quality code.

The Challenge

It's pretty simple. We'll post some JSON data to the URL you provide. You'll need to filter that JSON data and return a few fields. Here's an example request and an example response.

Details

From the list of shows in the request payload, return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

The returned JSON should have a response key with an array of shows. Each element should have the following fields from the request:

image - corresponding to image/showImage from the request payload
slug
title
Error Handling

If we send invalid JSON, You'll need to return a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request. For example:

{
    "error": "Could not decode request: JSON parsing failed"
}
Results

To submit your solution via the form below you will need a browser with JavaScript enabled.

You can submit multiple times. If the URL doesn't behave as we expect, we'll return the errors and give you a chance to fix it.

Once you pass the tests you will receive an automated success email from us with additional instructions on how to share your source code.

To make sure that our emails are not filtered into your "junk" or "spam" folder, please add dev-recruitment@nine.com.au to your list of trusted senders.

Submit your solution
Full name

Alice Bob
Email address (you will get an automated email if you pass)

email@server.com
URL of your service

http://awesomeservice.com/
Submit
FAQ

But.. what programming language should I use?
Our preference is a node.js or C#.NET solution. We also accept solutions in Python.
Do I need to send through the source code?
If you passed, we'll get in touch with you to share the source code with us. We’re looking for professionalism in your code.
Useful links

Heroku - A platform-as-a-service designed for developers, free for small apps.
AWS Elastic Beanstalk - Platform-as-a-service from Amazon, free tier option for 12 months.
Bitbucket - Source code hosting, with free private repositories for small teams.
