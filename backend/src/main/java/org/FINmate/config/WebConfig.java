package org.FINmate.config;


import lombok.extern.slf4j.Slf4j;
import org.FINmate.auth.config.AuthConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletRegistration;

@Slf4j
@Configuration
//@PropertySource({"classpath:/application.properties"})
public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer {
    final String LOCATION = "/Users/jmj/Desktop/coding 2/KB_fullstack/08_Spring/upload";
    final long MAX_FILE_SIZE = 1024 * 1024 * 10L;
    final long MAX_REQUEST_SIZE =  1024 * 1024 * 20L;
    final int FILE_SIZE_THRESHOLD = 1024 * 1024 * 5;;




    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[] { RootConfig.class, AuthConfig.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[] { ServletConfig.class };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[] { "/" };
    }



    @Override
    protected void customizeRegistration(ServletRegistration.Dynamic registration) {
//        log.info("Max File Size: " + maxFileSize);

        registration.setInitParameter("throwExceptionIfNoHandlerFound", "true");
        MultipartConfigElement multipartConfig =
                new MultipartConfigElement(
                        LOCATION,   // 업로드 처리 디렉토리 경로
                        MAX_FILE_SIZE,	// 업로드 가능한 파일 하나의 최대 크기
                        MAX_REQUEST_SIZE,	// 업로드 가능한 전체 최대 크기(여러 파일 업로드 하는 경우)
                        FILE_SIZE_THRESHOLD		// 메모리 파일의 최대 크기(이보다 작으면 실제 메모리에서만 작업)
                );
        registration.setMultipartConfig(multipartConfig);
    }


}