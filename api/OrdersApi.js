import request from 'superagent';
import moment from 'moment';
import Config from '../config';

class OrdersApi {

  getOrdersForUser(userId) {
    const url = `${Config.restApi.baseUrl}/orderData/user/${userId}`;
    return request
      .get(url)
      .query({ts: moment().valueOf()});
  }

  getOrderLineItems(orderId) {
    const url = `${Config.restApi.baseUrl}/orderData/lineItems/${orderId}`;
    return request
      .get(url)
      .query({ts: moment().valueOf()});
  }

  getOrderLineItems(orderId) {
    const url = `${Config.restApi.baseUrl}/orderData/lineItems/${orderId}`;
    return request
      .get(url)
      .query({ts: moment().valueOf()});
  }

  getOrderLineItem(orderId, orderLineItemId) {
    const url = `${Config.restApi.baseUrl}/orderData/lineItem/${orderId}/${orderLineItemId}`;
    return request
      .get(url)
      .query({ts: moment().valueOf()});
  }

}

export default OrdersApi;
