package lk.wendy.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:10 PM
 **/
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Item {
    @Id
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
//    private String product_image;
}
