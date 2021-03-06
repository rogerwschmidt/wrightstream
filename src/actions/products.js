import request from '../helpers/request';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_BUNDLES = 'GET_BUNDLES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const GET_SUPPLIES = 'GET_SUPPLIES';
export const GET_KINDS = 'GET_KINDS';
export const GET_SUPPLIES_BY_KIND = 'GET_SUPPLIES_BY_KIND';
export const GET_SOURCES = 'GET_SOURCES';
export const GET_TYPES = 'GET_TYPES';
export const GET_SOURCES_BY_TYPE = 'GET_SOURCES_BY_TYPE';

export const getProducts = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.slice(response.data.data.length-6, response.data.data.length)
      })
      .then(response => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response
        });
      });
    });
  }
);

export const getItems = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        dispatch({
          type: GET_ITEMS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getBundles = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/bundles/${shop_id}/allBundles`)
      .then(response => {
        dispatch({
          type: GET_BUNDLES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getCategories = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/categories/${shop_id}/allCategories`)
      .then(response => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getProductsByCategory = (id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/items/${shop_id}/allItems`)
      .then(response => {
        return response.data.data.filter(item => item.category_id === parseInt(id, 10));
      })
      .then(resItems => {
        return request(`/bundles/${shop_id}/allBundles`)
        .then(resBundles => {
          return resItems.concat(resBundles.data.data.filter(bundle => bundle.category_id === parseInt(id, 10)));
        });
      })
      .then(response => {
        dispatch({
          type: GET_PRODUCTS_BY_CATEGORY,
          payload: response
        });
      });
    });
  }
);

export const getSupplies = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/supplies/${shop_id}/allSupplies`)
      .then(response => {
        dispatch({
          type: GET_SUPPLIES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getKinds = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/kinds/${shop_id}/allKinds`)
      .then(response => {
        dispatch({
          type: GET_KINDS,
          payload: response.data.data
        });
      });
    });
  }
);

export const getSuppliesByKind = (id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/supplies/${shop_id}/allSupplies`)
      .then(response => {
        return response.data.data.filter(supply => supply.kind_id === parseInt(id, 10));
      })
      .then(response => {
        dispatch({
          type: GET_SUPPLIES_BY_KIND,
          payload: response
        });
      });
    });
  }
);

export const getSources = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/sources/${shop_id}/allSources`)
      .then(response => {
        dispatch({
          type: GET_SOURCES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getTypes = () => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/types/${shop_id}/allTypes`)
      .then(response => {
        dispatch({
          type: GET_TYPES,
          payload: response.data.data
        });
      });
    });
  }
);

export const getSourcesByType = (id) => (
  dispatch => {
    request('/auth/token')
    .then(response => {
      const shop_id = response.data.shops_id
      request(`/sources/${shop_id}/allSources`)
      .then(response => {
        return response.data.data.filter(source => source.type_id === parseInt(id, 10));
      })
      .then(response => {
        dispatch({
          type: GET_SOURCES_BY_TYPE,
          payload: response
        });
      });
    });
  }
);
