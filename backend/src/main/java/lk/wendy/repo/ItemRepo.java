package lk.wendy.repo;

import lk.wendy.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Chavindu
 * created : 2/29/2024-8:20 PM
 **/

public interface ItemRepo extends JpaRepository<Item,String> {
}
