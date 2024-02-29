package lk.wendy.controller;

import lk.wendy.dto.ItemDTO;
import lk.wendy.service.ItemService;
import lk.wendy.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:34 PM
 **/
@RestController
@RequestMapping("/manageItem")
@CrossOrigin
public class ItemController {
    @Autowired
    ItemService service;

    @ResponseStatus(HttpStatus.OK)
    @PostMapping
    public ResponseUtil saveItem(@ModelAttribute ItemDTO dto) {
        service.saveItem(dto);
        return new ResponseUtil("Ok", "Successfully Added", null);
    }

    @GetMapping
    public ResponseUtil getAllItems() {
        return new ResponseUtil("Ok", "Successfully Loaded", service.getAllItems());
    }
}
