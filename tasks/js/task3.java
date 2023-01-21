
public class Task3 {

	public static void main(String[] args) {

		// Use a Switch statement to output the string "Itransition"
		// depending on the language

		String language = System.getProperty("language");

		switch (language) {
			case "Java":
				System.out.println("Itransition");
				break;
			case "C#":
				System.Console.WriteLine("Itransition");
				break;
			case "JavaScript":
				console.log("Itransition");
				break;
			default:
				System.out.println("Unknown language");
				break;
		}
	}
}