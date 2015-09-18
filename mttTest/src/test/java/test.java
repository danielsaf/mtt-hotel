import org.junit.Test;

import static com.jayway.restassured.RestAssured.expect;
import static org.hamcrest.core.IsEqual.equalTo;

/**
 * Created by dsafinski on 18.09.15.
 */

public class test {
        @Test
        public void testGetSingleUser() {
                expect().
                        statusCode(200).
                        body(
                                "date", equalTo("2013-04-20"),
                                "rooms_available", equalTo(10)).
                        when().
                        get("http://localhost:9090/checkAvailability/2013-04-20");
        }

}

//"firstName", equalTo("Tim"),
//        "lastName", equalTo("Testerman"),
//        "id", equalTo("1")