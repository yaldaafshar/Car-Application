import { React } from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const SearchBox = (props) => {
  const { query, setQuery, placeholder } = props;

  const onSearchText = (word) => {
    const loweredQuery = word.toLowerCase();
    setQuery(loweredQuery);
  };

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onSearchText}
      style={styles.searchBox}
      value={query}
    />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 15,
  },
});

export default SearchBox;
