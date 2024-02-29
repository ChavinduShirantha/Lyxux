package lk.wendy.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 * @author : Chavindu
 * created : 2/29/2024-7:53 PM
 **/
@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackages = "lk.wendy.service")
public class WebRootConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
