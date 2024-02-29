package lk.wendy.advisor;

import lk.wendy.util.ResponseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:02 PM
 **/

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({RuntimeException.class})
    public ResponseUtil handleMyExceptions(RuntimeException e) {
        System.out.println(e);
        return new ResponseUtil("Error", e.getMessage(), null);
    }
}
