var VoiceInsights = require('voice-insights-sdk');

VoiceInsights.initialize({'user':{'userId': 'fooappuserid-1234'},'sessionId' : 'app-rocks-session-id-2', 'new':true},'<your SDK token>');

VoiceInsights.track("EndSession", null, "<speak>This is what we want Alexa to say. <p>Bla</p></speak>");
