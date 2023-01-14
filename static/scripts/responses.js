function getBotResponse(input) {
    
    if (input == "I am feeling sad today!") {
        return "You can talk to us! Things will definitely get better! Don't Lose Hope! Nothing is Permanent :)";
    } else if (input == "Thank you so much!") {
        return "My Pleasure!";
    } else if (input == "I am feeling happy today!") {
        return "Great! Lots of Love from your E-Buddy!";
    }

    // Simple responses
    if (input == "Hello") {
        return "Hello there!";
    } else if (input == "Goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
