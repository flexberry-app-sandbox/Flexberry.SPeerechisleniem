package SPeerechisleniem.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SPeerechisleniem.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Накладная
 */
@Entity(name = "IISSPeerechisleniemНакладная")
@Table(schema = "public", name = "Накладная")
public class Nakladnaya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипНакл")
    private String типнакл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Otvetstvennyj")
    @Convert("Otvetstvennyj")
    @Column(name = "Ответственный", length = 16, unique = true, nullable = false)
    private UUID _otvetstvennyjid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Otvetstvennyj", insertable = false, updatable = false)
    private Otvetstvennyj otvetstvennyj;


    public Nakladnaya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипНакл() {
      return типнакл;
    }

    public void setТипНакл(String типнакл) {
      this.типнакл = типнакл;
    }


}