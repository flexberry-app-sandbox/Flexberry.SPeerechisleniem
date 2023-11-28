package SPeerechisleniem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SPeerechisleniem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Ответственный
 */
@Entity(name = "IISSPeerechisleniemОтветственный")
@Table(schema = "public", name = "Ответственный")
public class Otvetstvennyj {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамилия")
    private String фамилия;


    public Otvetstvennyj() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }


}