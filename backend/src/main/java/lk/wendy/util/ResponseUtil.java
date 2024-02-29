package lk.wendy.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:03 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseUtil {
    private String state;
    private String message;
    private Object data;
}
