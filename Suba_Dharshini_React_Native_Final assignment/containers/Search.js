import React, { Component } from 'react';
import { Button, View, Text } from "react-native"
import SearchBar from 'react-native-search-bar'
import ProductListWithFlatList from "./ProductListWithFlatList"
import * as productActions from "./actionCreators/product";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchProductListWithFlatList from "./SearchProductListWithFlatList"
import Header from "../components/Header"


class Search extends Component {

  componentDidMount() {
    this.refs.searchBar.focus();
  }
  submitClick = (value) => {
    this.props.actions.searchProduct(value);
  };
  render() {
    return (
      <View>
        <Header title="Search" />
        <SearchBar
          ref='searchBar'
          placeholder='Search'
          onChange={e => {
            this.SearchClick(e.target.value)
          }}
        />
        <SearchProductListWithFlatList products={this.props.searchproduct}/>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchproduct:state.productState.searchItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);




