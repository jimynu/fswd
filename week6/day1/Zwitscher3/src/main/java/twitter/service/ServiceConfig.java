package twitter.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan({"twitter.service", "twitter.repo"})
public class ServiceConfig {
}
