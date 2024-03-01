package lk.wendy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:10 PM
 **/
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ItemDTO {
    private String sku;
    private String productName;
    private String category;
    private String sub_category;
    private String brand;
    private String unit;
    private int minimum_qty;
    private int qty;
    private String description;
    private double price;
//    private MultipartFile product_image;
}
