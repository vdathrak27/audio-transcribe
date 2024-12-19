package com.audio_transcribe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/*
If we simply run, it gives error creating the bean wih'openAIChatModel'.
Why does it create a bean, because we have added dependency called SpringAIOpenAI
to create a bean it needs an open AI Key.
 */
@SpringBootApplication
public class AudioTranscribeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AudioTranscribeApplication.class, args);
	}

}
