import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  header: {
    color: "#ffffff",
    backgroundColor: "#131313",
  },
});

function App() {
  return <h1 {...stylex.props(styles.header)}>Hello</h1>;
}

export default App;
