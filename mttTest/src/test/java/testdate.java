/**
 * Created by dsafinski on 18.09.15.
 */
import static com.jayway.restassured.RestAssured.expect;
import static com.jayway.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static org.hamcrest.core.IsEqual.equalTo;
import org.junit.Test;

public class testdate {
    @Test
    public void testCreateuser() {
        final String numOfDays = "2";
        final String checkInDate = "2013-04-10";
//        final String lastName = "Tester";

        given().
            parametrs("numOfDays", numOfDays,
                    "checkInDate", checkInDate).
        expect().
            body("numOfDays", equalTo(numOfDays)).
        when().
            get("http://localhost:9090/bookRoom");
    }
}
