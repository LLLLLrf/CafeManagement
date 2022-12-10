<H1>Cafe Management</H1>

> (CS) Group 3

[TOC]

# **Technical Report**

## **Introduction**

This project provides a more complete solution for the cashier of a campus café, including the client side and the administration side. The system provides for adding, modifying and querying information on campus cafés products and orders, as well as providing visual analysis of revenue data. 

The project team consists of eight people, namely Yu Zheng, Hong Cao, Ruofan Liao, Huiqing Huang, Kexin Lei, Haoran Wang, Peizhang Chen and Houyuan Pan. Hong Cao, Huiqing Huang and Kexin Lei are responsible for the system prototype design. Yu Zheng, Ruofan Liao, Haoran Wang, Peizhang Chen and Houyuan Pan are responsible for the system front-end design. Yu Zheng is responsible for the system back-end design and application deployment. 

The project is managed using the git version management tool and team meetings are held once every fortnight. In terms of development collaboration, prototyping, front-end design and back-end design are carried out in parallel, with one of the full-stack development project members coordinating the requirements. The development process prioritises the implementation of functionality before considering the beautification of the system interface and finally the addition of relevant documentation.

## **Project Plan and Risk Assessment**

###  Development Hurdles

#### Cross-platform application

 The application scenario for this system is a campus café, which needs to provide a simple and intuitive interaction for customers. For the client side of the system, the most intuitive interaction vehicle is a tablet. For the administration side of the system, the more appropriate carrier is the PC. Given that the main operating systems on the tablet market are iPadOS and Android, and the mainstream systems on the PC are Windows, Linux and MacOS, meeting the cross-platform use is a necessary requirement for this system.

#### Paymentinterface calls

Since the self-developed payment interface has shortcomings including low popularity, few users and low security, it is the most appropriate choice to provide order payment functionality by calling the interfaces of the mainstream payment methods. However, the interfaces of the mainstream payment methods are different. A payment method interface containing the developer environment is required for testing given that the product is currently in the validation phase.

#### Security of the system
The system involves both the process of money transactions and the function of order generation, so the requirements for this system in a production environment are very demanding. The security of this system has the following two minimum requirements:

1. **Able to prevent MITM from the TCP/IP link**: avoid users being able to directly modify the back-end database of the system through technical means, and prevent the occurrence of direct SQL injection into the back-end database to modify the payment status of the order under the condition of non-payment thus causing direct economic loss to the shop. 
2. **Prevent data leakage from the administration side**: avoid users from accessing shop product information and order information directly through the data interface of the management side.

#### Lack of development experience among team members

With only one full-stack developer on the front and back end and one front-end developer with development experience, the project needed to move forward with sufficient learning time for students without basic knowledge and to consider their learning costs.

### Development Plan

In response to the above obstacles to development, our team plans to overcome each of them through the following methods:

#### Using Electron

*Electron* is a framework for building desktop applications using *JavaScript*, *HTML*, and *CSS*. By embedding Chromium and Node.js into its binary, Electron allows developers to maintain one JavaScript codebase and create cross-platform apps that work on Windows, macOS, and Linux - no native development experience required. By using the Electron framework, team members are able to focus more on developing system functionality. With the exception of the one member responsible for building the application, the other members can be completely free from the difficulty of deploying on multiple platforms. 

#### Using Alipay’s sandbox environment

After comparing the developer environments of several major payment interfaces, our team finally chose to use Alipay's sandbox environment as the payment environment for this system during the product validation phase. The Alipay sandbox environment is a co-location testing environment provided by the Alipay Open Platform for developers, which is completely isolated from the production environment. So the interface calls made by developers in the sandbox environment will not have any impact on the data in the production environment. Through the Alipay sandbox environment, we can test whether the payment function is working properly without actually making a monetary transaction.

#### Security system design

For the security design of the system, we take three approaches to ensure the security of the system: 

1. **Do combined RSA and AES encryption for important back-end data transmission**: ensure that critical information will not be immediately cracked even if it is caught in a packet. 
2. **Absolutely avoid exposing the payment interface in the back-end design**: ensure the reliability of the payment information.
3. **Carry out data validation in the design of the back-end interface**: prevent SQL injection.

#### Using a more accessible development framework

Considering the learning cost of most members, the team discarded the relatively efficient and highly scalable *Qt* platform in the selection of the technology stack and chose the more accessible JavaScript development framework of *Vue3*+*Node.js*+*MySQL*. Considering that the system is a cashier system for a campus café, it does not require too much functionality expansion, so a certain amount of development efficiency was given up in exchange for more members being able to participate in the development of the system more quickly.

### Minimum Expectation

1. Able to add products with detailed information freely
2. Able to select drinks simply and intuitively on the client side and assist in calculating the total bill amount quickly when checking out.
3. Automatically add transaction records to the back office as bills are generated, recording the total amount of the transaction, the amount received, the amount of change, and the method of payment, allowing for quick reconciliation counts on the administration side. 
4. Separate the administration side from the client side to ensure security and accuracy of operations.
5. A personalised query system on the management side, providing transaction data queries and statistics that can be filtered by conditions to analyse business over a specific period of time.

### Development Sequence

The development sequence for the implementation of each function is, in order, requirements analysis, prototyping, front-end page design, database design, back-end development, front-end data binding, functional logic refinement and functional testing, where database design and back-end development are parallel development processes, and front-end data binding and functional logic refinement are parallel development processes. An assembly line approach is used between the various processes to maximise the efficiency of the team. The development sequence is shown in the picture below.

### Gantt chart

![GanttChart](D:\home\personal\university\课程\软件工程导论\GanttChart.png)

## **Requirements**

In this system, the requirements can be outlined as providing a user-friendly shopping solution for consumers, an easy-to-understand execution solution for café staff and a visual data presentation solution for café manager. Specifically, the requirements can be described through three aspects: client-side requirements, administration-side requirements and system-wide requirements.

### Client-side Requirements

As a customer, the level of satisfaction when ordering depends on whether the interface is user-friendly, whether the time taken is within expectations and whether the logic of shopping process is reasonable. The client side of the system therefore needs to be able to add products to the cart, delete products from the cart, customize products’ details, have no unnecessary steps, and have an interface that is attractive to the customer. More specifically, the client requirements can be broken down into the following aspects:

1. Jump through the different product categories so that customers can freely view the product listings for each category
2. Display individual item details including item name, item image, item price, item description, drink temperature, drink sweetness, on sale or not, on shelf date.
3. Adjust the options available for individual items, including drink temperature, drink sweetness, and item quantity.
4. Add individual items to the shopping cart to ensure that the items in the cart retain the options selected by the customer.
5. Adding different categories of products to the shopping cart to ensure that different categories of products are present in the cart at the same time.
6. The shopping cart calculates the total price of the currently selected items and displays basic information about the currently selected items.
7. The ability to delete individual items from the shopping cart without affecting the information of other items in the cart
8. The shopping cart does not allow the settlement of illegitimate orders, such as empty orders or orders for which the payment method has been selected.
9. Click on the checkout button in the shopping cart to be redirected to the payment page of the corresponding payment method to pay
10. Supports QR code or password verification of payment
11. Emptying of the shopping cart when payment is completed for each order
12. Support for simultaneous payment from multiple terminals

### Administration-side Requirements

As a staff, the satisfaction level when browsing the order list depends on the clarity and completeness of the information on each product in the order, the timeliness of order updates and the ease of checking orders. As a staff, you will want to be able to quickly and easily add, delete and modify product information, visualise and analyse the shop's revenue. Therefore, the administration side of the system needs to be able to quickly view the details of pending orders, update order status, check order information, add items on sale, remove items from the sales list, update item information, view revenue analysis, etc. More specifically, the requirements of the administration side can be broken down into the following aspects:

1. Display order list
2. Dynamically update the payment status and completion status of orders
3. Display details of each order, including drink name, optional requirements, etc.
4. Filter orders by the product name contained in the order
5. Filter orders by order generation timeframe
6. Display information on items available for sale
7. Modify individual item details including category, name, drink temperature, drink sweetness, availability, price, description
8. Delete individual items
9. Add individual products and upload product images
10. Display revenue statistics, including revenue for the day, revenue for seven days, top drinks for the day, revenue for the month and revenue for the year

### System-wide Requirements

As a complete management system, it needs to ensure stable operation, information security and operational efficiency. More specifically, the system-wide requirements can be broken down into the following aspects:

1. Do combined RSA and AES encryption for important data transfers
2. Absolutely avoid exposing the payment interface in the design
3. Data validation in the design of the system interface to prevent SQL injection
4. The system needs to be able to listen to the payment status of multiple orders at the same time
5. Use of a reasonable data table structure for statistical purposes

## **Design**

The system prototype was designed by axure and figma, with Vue3 and Element as the front-end framework, Node.js as the back-end framework and MySQL as the database.

### Client-side Prototype

The prototype design of the client side of the system is divided into two interfaces: product display and shopping cart. 

1. For the product display interface, our team chose to display the products in the form of cards, with different font sizes and images to highlight relevant information about the products, such as price and name. Multiple product cards are grouped by series to make it easier for users to select products under their preferred drink category. We also designed a dynamic digital display for the shopping cart indicator bar located on the product screen to remind users of the number of items currently contained in their shopping cart. 

2. For the product detail screen, our team adopted a list style design to allow users to select product attributes in a clear and intuitive way. For the shopping cart interface, we chose to use a tabular presentation method, which allows the user to visually see the name, attributes, price and total amount of the bill for the product they have selected.

### Administration-side Prototype

The prototype design of the administration side of the system is based on the needs of backend management, and the administration side is divided into three interfaces: bill details interface, product setting interface and statistic interface. 

1. For the bill details interface, our team used an intuitive list format to display the billing data, including the bill number, generation time, current status of products, current status of bills and the details button. The details page shows more information about individual bills, including products’ names, attributes, quantities and other relevant information to the data already shown in the list. We have also designed a conditional filter window on the bill details screen to make it easier to quickly locate the bill you need based on time or product name. 
2. For the product setting interface, our team followed the design of the product display interface on the client side and added a single product information modification portal on top so that managers can add or delete products, modify product types, names, attributes, prices and other information, and also choose whether to put the products on sale. 
3. For the data statistics interface, our team chose to display commonly used statistics, including seven-day revenue statistics, current day revenue statistics, type revenue statistics, single product revenue statistics, etc. We also use a variety of charts to display statistics, including pie charts, bar charts, line charts, etc.

### Database

The database for this system is built using MySQL and uses Sequelize to connect to the MySQL database. The database contains two data tables to store product information and order information respectively. The data table for product information contains fields for product name, product list, product options, whether or not it is on sale, product image file name, product picture placeholder image, product price, product description, where the product options are of JSON type. The data table for order information contains fields for order number, order payment status, order completion status, product information contained in the order, order payment method, total amount of the order, where the product information contained in the order is of JSON type.

Most of the data in this system is stored in the MySQL database, with the exception of the product images. As the product images are large, they cannot be stored in the MySQL database after conversion to base64, so the system stores the product images in the back-end directory of the system, and then stores the corresponding file names of the product images in the database at the back-end, so that when the front-end requests the product data, it reads it out through the path of the corresponding image and gives it to the front-end together with other product information in the database.

### Front-end

The system uses the Vue3 framework to develop the front-end interface for both the client and the administration side. Components allow us to divide the UI into separate, reusable parts and to think about each part individually.

1. In the client side of the system, the front-end component development is divided into a home page component, a product list component, a product details component, a shopping cart component, and a payment callback component. 
2. In the administration side of the system, the front-end component development is divided into the home page component, order list component, order detail component, product list component, product detail component, add product component, daily revenue component, weekly revenue component, daily products rank component, monthly revenue component, this year's revenue component.

The front-end of the system is designed using the Element component library, using components such as cards, forms, buttons, input boxes and selectors as components for interaction with the user, and Echart is used for data presentation in the revenue statistics on the administration side. The front-end of the system uses Axios to fetch the interface and asynchronously process the corresponding data from the interface.

### Back-end

The backend of the system uses the Express framework in Node.js, which has the advantage that Express can set up middleware to respond to HTTP requests and defines routing tables to perform different HTTP request actions. The design of the back-end interface is divided into three categories: product information interface, order information interface and product image interface. The payment interface is not exposed in the back-end, but rather as a middleware that is executed at the same time as the order is generated.

#### Product Information Interface

The interface on the back end of this system regarding product information is designed as follows:

1. Add product, post type, requesting data for the product to be added, responding to the added product information
2. Get all products, get type, no parameters, response to all products
3. Get information about a single product, get type, parameter is the name of the product you want to get information about, response is the product information of the corresponding name
4. Get all information about a category of products, get type, parameter is the name of the category of products for which information is needed, respond to the product information of the corresponding category
5. Update a single product, put type, the parameter is the product information to be updated, the response is the updated product information
6. Delete a single product, delete type, the parameter is the number of the product to be deleted, the number of products that have been deleted
7. Delete all items, delete type, no parameters, response to the number of items deleted

#### Order Information Interface

The back-end interface for order information in this system is designed as follows:

1. Generate a new order, post type, with parameters for the order information to be generated, call the payment interface after the order is generated, and continuously listen to the order payment status, respond to the payment page link
2. Get all order information, get type, no parameters, respond to all order information
3. Update individual order information, put type, parameter is the order information to be updated, response to the updated order information
4. Delete individual orders, delete type, parameter is the order number to be deleted, response is the number of orders deleted
5. Delete all orders, delete type, no parameters, response to the number of orders deleted
6. Filter orders by keywords, post type, parameter is a list of keywords, responding to all orders containing the keywords
7. Filter orders by order generation time range, post type, parameters are start time and end time, response to all orders in that time range
8. Get order information according to order number, post type, parameter is order number, respond to this order information
9. Get daily revenue for the last 7 days, post type, no parameters, in response to daily revenue for the last 7 days
10. Get all orders for the current day, post type, no parameters, in response to all orders for the current day
11. Get monthly revenue for the last year, post type, no parameters, in response to monthly revenue for the last year
12. Get all unpaid orders, post type, no parameters, in response to all unpaid orders
13. Change the completion status of a given order, post type, with the order number as the parameter, in response to an order that has been changed
14. Get monthly sales for all items, post type, no parameters, in response to monthly sales for all items.

#### Product Image Interface

The interface in the back end of this system regarding product images is designed as follows:

1. store uploaded files, post type, parameter is the file stream to be stored, respond to the storage status
2.  Get the list of uploaded files, get type, no parameters, in response to the list of uploaded files
3. Download the specified file, get type, parameter is the name of the file, in response to the downloadable file stream

### Security

Regarding the security design of the system, we adopt the way of doing joint encryption of RSA and AES for important data transmission at the back end to ensure that the key information will not be cracked immediately even if the packet is caught. RSA is not suitable for encrypting large data, but rather first into a random AES password, encrypting the original information with AES, and then encrypting the AES password with RSA. For this system, the information called back from the payment interface is the more important information, and the information called back from the payment interface is time-sensitive. It is only necessary to set the timeout of the payment interface to a shorter time than the optimal time for using the birthday attack to blast the RSA key, so that the relative security of the data can be achieved to a very large extent.

## **The Proof-of-Concept Coding and Integration**

In the development of the client-side system, our team completed all the requirements that had been proposed, including user ordered drinks, user defined drink options, and order checkout. While developing the shopping cart component, we found that the data required for the shopping cart was located in the product detail component, which was three levels away from the product detail component and the data transfer was too cumbersome. We redesigned the order data by placing it under the home page component and using dependency injection into the shopping cart component and the product detail component. Whether the order data is updated in the product details page or in the shopping cart, it is synchronised to the data in the same component, avoiding the loophole of duplicate updates.

In the development of the administration side of the system, our team completed most of the requirements that had been proposed, including order list display, order detail display, order condition filtering, product information change, and revenue analysis. In the development of the revenue analysis function, as our team did not have long-term revenue data for the coffee shop, we used some sample data from the internet to demonstrate our revenue analysis function on the order data.

In the development of the back-end of the system, our team completed most of the requirements that had been proposed, including doing combined RSA and AES encryption for important data transmission, absolutely avoiding exposing the payment interface in the design, listen to the payment status of multiple orders at the same time, and a reasonable data table structure. When designing the interface for revenue analysis on the management side, it was found that the data table structure designed earlier for storing order data was not conducive to directly querying sales over a period of time using MySQL statements. The data table structure for storing order data was redesigned so that the back-end could use Sequelize to connect to the MySQL database and then query revenue data directly using MySQL statements.

**The following are more detailed design details of the system:**

1. **Calling the payment interface after the order is generated to avoid exposing the payment interface**: In the back-end order creation interface, the payment interface is called at the same time, in response to the payment link returned by the payment interface, to achieve the purpose of not exposing the payment interface directly to the back-end and to prevent hackers from directly modifying the order amount.
```javascript
// order.controller.js
 exports.create = (req, res) => {
     ...
     Orders.create(orders)
     .then(data => {
         alipay.payapi(data.dataValues)
         .then(url=>{
             res.send(url)
     ...
```

```javascript
// alipay.js
const alipaySdk = new AliPaySdk({
    appId: '20210001XXXXXXXX', 
    ...
})
async function paycreate(data){
const formData = new AlipayForm()
...
const result = await alipaySdk.exec('alipay.trade.page.pay',{},{ formData: formData })
return result
}
exports.payapi = paycreate;
```

2. **Continuously listen to the order payment status**: Use the interval loop in node to actively call Alipay's query interface, query the order status by order number, and set the maximum number of cycles to achieve the role of order timeout invalid.
   
```javascript
// order.controller.js
function updatepay(publicid){
	...
	Orders.update({paytime:showtime}...})
	if(data[0]==1){
		clearInterval(intervalObj[publicid])
	}
	...
}
function updateunpay(publicid,status){
	Orders.update({paytime:status}...})
	...
}
function checkpay(publicid){
	timesRun[publicid] += 1;
	if(timesRun[publicid] === 60){
		clearInterval(intervalObj[publicid])
	}
	...
	switch(r.trade_status) {
		case 'WAIT_BUYER_PAY':
			updateunpay(publicid,'WAIT_BUYER_PAY')
			break;
		case 'TRADE_SUCCESS':
			updatepay(publicid)
			break;
	...
}
```

3. **Listening to the payment status of multiple orders at the same time**: Two arrays are used to manage the order listening process, the interval process is stored as an object in the array and can be terminated via this object.

```javascript
// order.controller.js
var intervalObj=new Array();
var timesRun=new Array()
...
timesRun[data.dataValues.publicid]=0
intervalObj[data.dataValues.publicid]=setInterval(checkpay, 2000, data.dataValues.publicid);
...
```

4. **Store uploaded product images**: A file stream of images is received using an asynchronous function with the following middleware for this function.

```javascript
// upload.js
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, __basedir + "/uploads/");
	},
	filename: (req, file, cb) => {
		console.log(file.originalname);
		cb(null,file.originalname);
	},
});
let uploadFile = multer({
	storage: storage,
	limits: { fileSize: maxSize },
	}).single("file")
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
```

5. **Combined RSA and AES encryption of important data transmissions**: Symmetric encryption of messages using AES and asymmetric encryption of AES keys using RSA. The data transmitted includes the AES encrypted messages with the keys decoded by AES after RSA encryption, thus securing important data. AES is implemented using the crypto library in node.js and RSA is implemented using the node-rsa library in node.js.

```javascript
// encrypt
const AES_encrypted=aesEncrypt(data, aes_key)
const RSA_encrypted = rsa_encrypt(aes_key)
// decrypt
const RSA_decrypted = rsa_decrypt(RSA_encrypted)
const AES_decrypted=aesDecrypt(AES_encrypted, RSA_decrypted)
```

6. **Build Docker by using docker-compose**: Using a *Dockerfile* template file allows users to easily define an individual application container. Compose can be used on it for orchestration management as long as the platform it operates on supports the Docker API.

```dockerfile
# Dockerfile
FROM node:16
WORKDIR /cfm-node
COPY package.json .
RUN npm install
COPY . .
CMD npm start
```

```yaml
# docker-compose.yml
services:
  mysqldb:
    image: mysql:8.0
    ...
  app:
    depends_on:
      - mysqldb
    build: ./cfm-node
    ...
```

## **Testing and evaluation**

The client and administration side of the system was packaged as an installer for the desktop application after completion and the first round of internal testing was carried out within the team. After fixing the identified bugs, a random number of students were found to help our team with the testing, with some playing the role of customers taking orders, some playing the role of staff completing orders and some playing the role of shop managers making changes to product information. After a series of tests, we received the following feedback:

- For the client-side system, the order page is clear, concise and easy to use, with detailed categories, comfortable layout. The order checkout is quick and responsive, but the sidebar switch is a bit slow to load. Another shortcoming is that the sugar option could be added as a sugar-free option. Besides, a pop-up box should be added to remind customers when they add products the cart without selecting temperature or sugar level. More payment methods should be added as there is only one payment method is available now.
- For the administration-side system, the interface is clear and easy to use. The functionality is good and can be applied to different scenarios. Quick response time when viewing order details, but a little long response time when modifying product information. In addition, there are many features that can be added and optimised

## **Conclusion and Future Work**

The system meets the basic requirements of the project design, providing a campus café management system where customers can order, staff can view orders and shop managers can manage products and view revenue analysis. The system still lacks a database that can store account numbers for checking user accounts, so that the system can be distributed to each customer's terminal. 

### Extension

#### Intelligent recommendation of products from the client. 

By obtaining the product sales data carrying time information from the order database of this system, Intelligent recommendation can be considered from two aspect:

1. **Based on weather conditions and current time, including but not limited to temperature, humidity, precipitation, etc.** The system can simultaneously obtain the prevailing weather conditions from the Internet when recording each order information and store it in the database together with the order information. When the data reaches a certain amount, the weather conditions (temperature, humidity, precipitation, etc.) and the current time are used as independent variables and the drink name is used as the dependent variable to build a multi-classification training dataset. Using XGBoost, a machine learning model that integrates many weak decision trees to form a strong classification prediction model, which can be trained to output the drink name based on the multidimensional weather conditions and the current time of day. At this point it is possible to obtain the current weather conditions and time of day directly from the internet at the back end, get the recommended drink and render its complete information on the client side to recommend it to the customer. 

2. **A time series analysis of user behaviour can be carried out to personalise the recommended drinks with an account system in place.** Specifically, a time series is constructed using information about items from the same user's order, and when the time series is large enough and statistically significant, it is trained using LBGM or trained using TCN. The trained model or network has the predictive capability to personalise the drink recommendation for that user. The predictive power of the model will be optimised as the number of times the user uses it grows, with the aim of learning the user's behaviour and making recommendations.

#### Calculate good cost and export financial statements on the management side.
By adding cost data from the product database, more revenue data from the café can be analysed on the management side, including but not limited to shop turnover, sales, gross margin, VAT, etc. Standard format financial statements can be exported in accordance with the tax format requirements of that country.

#### Able to handle multiple concurrencies in the back-end of the system.
After adding user accounts to the system, the system is distributed to each customer's terminal. As the number of users grows, the computing pressure on the system's back-end servers rises. To better solve this problem, the back-end of the system will be further optimised so that asynchronous operations can be used to cope with multiple concurrencies when the amount of concurrency is low. Asynchronous can achieve concurrency in the use of I/O resources, but asynchronous cannot use CPU resources concurrently. Multi-processing is the best way to exploit the benefits of a multi-core operating system. The Node.js backend of this system can be multi-processed using the Cluster module. In cases where multi-processing is not sufficient for server concurrency, a distributed backend can be considered.

#### Schedule the staff work on the management side.
After the system has been in use for a period of time, the amount of data in the order database has become relatively large. At this point it is possible to consider analysing the completion time of each order and have the system dynamically dispatch multiple staff in the café. There are two ways of implementing this function.:

1. The first way is to first calculate the average completion time for each item by each staff. Then, a dynamically planned state transfer equation is listed based on the café scenario. The state of the immediate pending order is then brought into the state transfer equation, the local optimum solution for the scenario is solved, and the task is distributed to each staff. 
2. The second way is to construct an openai/gym environment based on the influencing factors of the coffee shop scenario, and Policy-Based Reinforcement Learning is used to train all the states in the past environment to obtain the most optimal policy function to make a decision on the global optimal solution for the current state. The use of systematic job scheduling has the added advantage of making it easier to evaluate the performance of each staff's work.

---



# **Appendix 1 - User Manual**

## **System Installation Guide**
### Download

Download the client-side and administration-side packages from https://github.com/FaterYU/CafeManagement/releases/tag/1.1.0

### Installation

Follow the installation program guidelines and customise the installation directory when necessary.

### Necessary for the system to work properly 

Computer needs to have access to the internet and be able to connect to the cloud server (120.79.189.218).

##  **Client-side Operate Instructions**

### Order

- Click on the product you want to order, select the sweetness, temperature and quantity of the product in the detail page and click on "Add to cart".
- After selecting all the items to be ordered, the user can click on the shopping cart in the bottom right corner, select the payment method and click on "submit" to submit the order and pay.

### Select products

- The user can select different product categories to place an order through the navigation bar on the left.

### Modify shopping cart

- Users can click on the shopping cart in the bottom right corner to view the contents of the cart, click on the button to the right of the product in the order and confirm to complete the deletion of the product. 

### Payment method

- After clicking "submit" the system will pop up the payment interface. On the left side of the payment interface is the payment QR code, and on the right side is the account password for payment. When the user chooses to use the QR code to pay, he/she needs to use the sandbox version of Alipay app to scan the code. When the user chooses to pay using the account password, he/she can use sandbox account lnknhn7671@sandbox.com and password 111111 to make the payment. The assets in the sandbox account are virtual assets.

##  **Administration-side Operate Instructions**

The navigation bar on the left side gives the user the option of accessing the "Orders page", "Products page" and "Statistics page"

### Orders page.

#### View order details

The user can click on "More Detail" to the right of each order to view the details of that order.

#### Filter orders by the product name they contain

Users can click on the search box on the right and select or enter one or more product names to be filtered, the list of orders on the left will be refreshed automatically. 3.

#### Filter orders by order completion time

Below the search box on the right, users can click on "FROM" and "TO" to select the start and end time for filtering, and then select the date in the calendar below.

#### Complete the order

Once an order has been placed and paid for, the status of the order will be displayed as "Unfilled" and when the merchant has completed the order, they can click on the status label and it will change to "Completed".

### Product Page

#### Add a product

Users can add a new product by clicking on the 'Add Product' button above. Here you can enter the product name, category, temperature, sweetness, description, price, availability and upload a picture of the product in order. Click on the "Create" button below to complete the addition.

#### Modify product information

On the product page, click on the Edit button at the bottom right of each product to modify or delete the product information.

### Statistics page

#### View statistics

On this page, merchants can view the weekly, daily and monthly revenue and total revenue for each type of drink, the change in revenue by time of year, and the hot items and their sales for the month.

## System troubleshooting

- When the system page does not display products and orders, please check whether the computer is connected to network. You can use the command `ping 120.79.189.218` to check whether the system back-end service is normal.

- When the system travels abnormally, please check whether the installation is the latest version, not the beta version.

---

# **Appendix 2 - Maintenance Manual **

[FaterYU/CafeManagement: SCNU&UoA Cafe Management (github.com)](https://github.com/FaterYU/CafeManagement/)

## Install Application

### Windows Version Download

- [Client](https://github.com/FaterYU/CafeManagement/releases/download/1.1.0/CafeManagement-Client.Setup.1.1.0.exe)
- [Manage](https://github.com/FaterYU/CafeManagement/releases/download/1.1.0/CafeManagement-Manage.Setup.1.1.0.exe)

### Install

Follow the installation program

**You can use Application without build Back-end by yourself, because author build on cloud server and provide serve**

## Make  Back-end from Docker

### Compose Install

#### Linux

1. Run the following command to download the current stable version of Docker Compose:

   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. To apply executable permissions to binaries:

   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. Create a soft chain:

   ```bash
   sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
   ```

4. Test whether the installation is successful:

   ```bash
   docker-compose version
   # cker-compose version 1.24.1, build 4667896b
   ```

#### Windows

The Windows Docker Desktop Edition and Docker Toolbox already include Compose and other Docker apps, so Windows users do not need to install Compose separately.

#### macOS

The Docker Desktop Edition and Docker Toolbox for Mac already include Compose and other Docker apps, so Mac users do not need to install Compose separately.

### Make from docker-compose.yml

1. Clone project from GitHub

   ```bash
   git clone https://github.com/FaterYU/CafeManagement.git
   ```

2. Switch the terminal to the root directory of project

   ```bash
   cd CafeManagement
   ```

3. Build docker from `docker-compose.yml`

   ```bash
   docker-compose up -d
   ```

## Make Back-end from Source Code

### Install Node.js

The Node.js installation package and source code can be downloaded from: <https://nodejs.org/en/download/>

The Node official website has changed the linux download version to the compiled version, we can download and decompress it directly and use it:

```bash
wget https://nodejs.org/dist/v16.14.2/node-v16.14.2-linux-x64.tar.xz    // download
tar xf  node-v16.14.2-linux-x64.tar.xz       // unzip
cd node-v16.14.2-linux-x64/                  // go to directory
./bin/node -v                               // check node version
# v16.14.2
```

### Install MySQL

Install from apt

```bash
sudo apt install mysql-server
```

Start MySQL Service

```bash
sudo service mysql restart
```

### Configuring MySQL Information

#### Base Information of MySQL

- host --> localhost
- user --> cfm
- password --> cfm123456
- database --> cfm
- table --> orders, goods

#### Configuring Base Infomation

- Create database

```sql
create database cfm;
```

- create user

```sql
create user 'cfm'@'%' identified by 'cfm123456';
```

- Authorization

```sql
grant all on cfmdb.* to 'cfm'@'%';
```

### Install Node modules

```bash
cd cfm-node
npm install -s
```

### Start Back-end

```bash
 npm start
```

## Secondary Development from Source Code

### Requirement

- **[Node.js v16.14.2](http://nodejs.cn/)**
  - **[npm v8.5.5]**
- **[MySQL v8.0.28](https://www.mysql.com/)**

### Client Front-end Start

#### Install Node modules

```bash
cd cfm-vue
npm install -s
```

#### Start Client Front-end as Application

```bash
npm run electron:serve
```

#### Start Client Front-end as Web

```bash
npm run serve
```

#### Build Client Front-end as Application

```bash
npm run electron:build
```

#### Build Client Front-end as Web

```bash
npm run build
```

### Management Front-end Start

#### Install Node modules

```bash
cd manage-vue
npm install -s
```

#### Start Management Front-end as Application

```bash
npm run electron:serve
```

#### Start Management Front-end as Web

```bash
npm run serve
```

#### Build Management Front-end as Application

```bash
npm run electron:build
```

#### Build Management Front-end as Web

```bash
npm run build
```

### File Structure of Client Front-end

```bash
cfm-vue
├── README.md
├── babel.config.js
├── jsconfig.json
├── preload.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.ico
├── src
│   ├── App.vue
│   ├── api-http.js
│   ├── assets
│   │   ├── icons
│   │   ├── payment
│   │   └── pictures
│   ├── background.js
│   ├── bus.js
│   ├── components
│   │   ├── APItest.vue
│   │   ├── CartCard.vue
│   │   ├── CartPage.vue
│   │   ├── DetailPage.vue
│   │   ├── DrinkCard.vue
│   │   ├── HomePage.vue
│   │   ├── ManageHome.vue
│   │   └── PaySuccess.vue
│   ├── config
│   │   └── rsa_public_key.pem
│   ├── main.js
│   ├── router.js
│   ├── services
│   │   ├── GoodsService.js
│   │   ├── OrdersService.js
│   │   └── UploadFilesService.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
└── vue.config.js
```

### File Structure of Manage Front-end

```bash
manage-vue
├── README.md
├── babel.config.js
├── jsconfig.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── logo.ico
├── src
│   ├── App.vue
│   ├── api-http.js
│   ├── assets
│   │   ├── icons
│   │   └── pictures
│   ├── bus.js
│   ├── components
│   │   ├── APItest.vue
│   │   ├── DetailPage.vue
│   │   ├── DrawChart.vue
│   │   ├── DrawPieChart.vue
│   │   ├── DrinkCard.vue
│   │   ├── HomePage.vue
│   │   ├── ManageAPI.vue
│   │   ├── ManageHome.vue
│   │   ├── MonthChart.vue
│   │   ├── OrderDetail.vue
│   │   ├── ProductDetail.vue
│   │   ├── RankingChart.vue
│   │   ├── SingleOrder.vue
│   │   ├── SingleProduct.vue
│   │   ├── TotalProfit.vue
│   │   ├── UploadComp.vue
│   │   ├── UploadProduct.vue
│   │   └── YearChart.vue
│   ├── config
│   │   └── rsa_public_key.pem
│   ├── main.js
│   ├── router.js
│   ├── services
│   │   ├── GoodsService.js
│   │   ├── OrdersService.js
│   │   └── UploadFilesService.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
└── vue.config.js
```

### File Structure of Back-end

```bash
cfm-node
├── Dockerfile
├── package-lock.json
├── package.json
├── server.js
├── src
│   ├── config
│   │   ├── db.config.js
│   │   ├── rsa_create.js
│   │   ├── rsa_private_key.pem
│   │   └── rsa_public_key.pem
│   ├── controllers
│   │   ├── file.controller.js
│   │   ├── goods.controller.js
│   │   └── orders.controller.js
│   ├── middleware
│   │   ├── alipay.js
│   │   └── upload.js
│   ├── models
│   │   ├── goods.model.js
│   │   ├── index.js
│   │   └── order.model.js
│   ├── routes
│   │   ├── goods.routes.js
│   │   ├── orders.routes.js
│   │   ├── pay.routes.js
│   │   └── upload.routes.js
│   └── utils
│       ├── aes.js
│       ├── crypt_util.js
│       └── rsa.js
├── uploads
└── uploads-full

```

## Framework Document

- Prototype design **[Axure](https://docs.axure.com/axure-rp/reference/getting-started-video/)**
- Cross-platform framework **[Electron](https://www.electronjs.org/zh/docs/latest/)**
- UI framework **[Element](https://element-plus.gitee.io/zh-CN/component/button.html)**
- Front-end framework **[Vue 3](https://cn.vuejs.org/guide/quick-start.html)**
- Database **[MySQL](https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html)**

## More Infomation

- [Technical report]()

## Contributors

- [FaterYU (FaterYU) (github.com)](https://github.com/FaterYU)
- [LLLLLrf (github.com)](https://github.com/LLLLLrf)
- [kuzzz02 (github.com)](https://github.com/kuzzz02)
- [Pumpkingo123 (Pumpkingo) (github.com)](https://github.com/Pumpkingo123)
- [cookcookcoo (github.com)](https://github.com/cookcookcoo)
- [1zero224 (github.com)](https://github.com/1zero224)
- [sumikko43 (github.com)](https://github.com/sumikko43)
- [KKKaa82 (github.com)](https://github.com/KKKaa82)

