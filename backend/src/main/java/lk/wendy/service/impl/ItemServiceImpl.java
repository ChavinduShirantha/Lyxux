package lk.wendy.service.impl;

import lk.wendy.dto.ItemDTO;
import lk.wendy.entity.Item;
import lk.wendy.repo.ItemRepo;
import lk.wendy.service.ItemService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:22 PM
 **/
@Service
@Transactional
public class ItemServiceImpl implements ItemService {
    @Autowired
    ItemRepo repo;
    @Autowired
    ModelMapper mapper;
    @Override
    public void saveItem(ItemDTO dto) {
        Item item = new Item(dto.getSku(), dto.getProductName(), dto.getCategory(), dto.getSub_category(), dto.getBrand(), dto.getUnit(), dto.getMinimum_qty(), dto.getQty(), dto.getDescription(), dto.getPrice(), "");
        if (repo.existsById(dto.getSku()))
            throw new RuntimeException(dto.getSku() + " is already available, please insert a new ID");

        try {
            String projectPath="D:\\Lyxux\\Lyxux";
            //String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            File uploadsDir = new File(projectPath + "/uploads");
            System.out.println(projectPath);
            uploadsDir.mkdir();

            dto.getProduct_image().transferTo(new File(uploadsDir.getAbsolutePath() + "/" + dto.getProduct_image().getOriginalFilename()));

            item.setProduct_image("uploads/" + dto.getProduct_image().getOriginalFilename());

            repo.save(item);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        System.out.println(item);
    }

    @Override
    public List<ItemDTO> getAllItems() {
        List<Item> all = repo.findAll();
        return mapper.map(all, new TypeToken<List<ItemDTO>>() {
        }.getType());
    }
}
