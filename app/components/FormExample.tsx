import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const FormExample = ({
  toastActive,
  setToastActive,
  result,
  type,
  setResult,
  setType,
}: {
  toastActive: boolean;
  setToastActive: React.Dispatch<React.SetStateAction<boolean>>;
  result: string;
  type: string | "success" | "error";
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    setErrors([]); // Limpiar errores previos

    try {
      const response = await axios.post(
        "http://10.90.0.123:8000/api/sanctum/token",
        { email, password }
      );
      console.log(response.data);
      setToastActive(true); // Activar el toast
      setResult("Inicio de sesión exitoso");
      setType("success");
    } catch (err) {
      console.error(err);
      const errorData = err.response?.data;
      if (Array.isArray(errorData?.errors)) {
        setErrors(errorData.errors);
        setToastActive(true); // Activar el toast

        setResult(errorData.message);
        setType("error");
      } else if (errorData?.message) {
        setErrors([errorData.message]);
        setToastActive(true); // Activar el toast

        setResult(errorData.message);
        setType("error");
      } else {
        setErrors(["Error desconocido al iniciar sesión"]);
        setToastActive(true); // Activar el toast

        setResult("Error desconocido al iniciar sesión");
        setType("error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>

      {loading && (
        <Spinner
          visible={true}
          size="large"
          color="#fff"
          overlayColor="rgba(0, 0, 0, 0.5)"
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {errors.length > 0 && (
        <View style={styles.errorContainer}>
          {errors.map((error, index) => (
            <Text key={index} style={styles.errorText}>
              {error}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default FormExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "80%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginVertical: 10,
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorContainer: {
    marginTop: 10,
    alignItems: "flex-start",
  },
  errorText: {
    color: "red",
    marginVertical: 5,
    fontSize: 14,
  },
  loading: {
    marginTop: 10,
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
});
