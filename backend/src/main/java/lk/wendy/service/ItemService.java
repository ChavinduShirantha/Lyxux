package lk.wendy.service;

import lk.wendy.dto.ItemDTO;

import java.util.List;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:22 PM
 **/

public interface ItemService {
    void saveItem(ItemDTO dto);
    List<ItemDTO> getAllItems();
}
