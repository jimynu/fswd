package twitter.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
public class MailConfig {
	
	@Bean
	String smtpHost() {
		return "localhost";
	}
	
	@Bean
	int smtpPort() {
		return 2525;
	}
	
	@Bean
	JavaMailSender mailSender() {
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		javaMailSender.setHost(smtpHost());
		javaMailSender.setPort(smtpPort());
		return javaMailSender;
	}
}
