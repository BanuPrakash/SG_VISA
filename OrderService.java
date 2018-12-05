package com.visa.prj.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.visa.prj.dao.OrderDao;
import com.visa.prj.dao.ProductDao;
import com.visa.prj.entity.Item;
import com.visa.prj.entity.Order;
import com.visa.prj.entity.Product;

@Service
@Transactional
public class OrderService {
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private OrderDao orderDao;
	
	public List<Order> getOrders() {
		return orderDao.findAll();
	}
	
	public void placeOrder(Order order) {
		orderDao.save(order);
		List<Item> items = order.getItems();
		for(Item i : items) {
			Product p = productDao.findById(i.getProduct().getId()).get();
			p.setQuantity(p.getQuantity() - i.getQuantity());
		}
	}
	
	
}
