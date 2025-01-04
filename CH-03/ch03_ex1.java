import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.MongoClientSettings;
import com.mongodb.ConnectionString;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Main {
    public static void main(String[] args) {
        // Load properties from config file
        Properties properties = new Properties();
        try (FileInputStream fis = new FileInputStream("config.properties")) {
            properties.load(fis);
        } catch (IOException e) {
            System.err.println("Error loading configuration file: " + e);
            return;
        }

        // Get MongoDB URI from properties
        String uri = properties.getProperty("mongodb.uri");
        if (uri == null || uri.isEmpty()) {
            System.err.println("MongoDB URI is not specified in the configuration file.");
            return;
        }

        // Connect to MongoDB Atlas
        try (MongoClient client = MongoClients.create(new ConnectionString(uri))) {
            System.out.println("Connected to MongoDB Atlas");
            // Perform database operations here
        } catch (Exception e) {
            System.err.println("Error connecting to MongoDB Atlas: " + e);
        }
    }
}
