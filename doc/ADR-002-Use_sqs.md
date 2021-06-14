# ADR 002 - Use SQS

##Context
The SUpplyChain API is unstable and we need to be prepared in case the service is down or return some unexpected errors.

##Decision
Adding an internal Queue to store the saved products will allow us to be reliable in case the SupplyCHain service is not 
running. The proposed process is:
- User creates a new product
- The product is stored in Database (DynamoDB)
- Once saved, the product is sent to SQS
- Every 1 minute, the application will consume the SQS messages and send them to SupplyChain API via client.
- Once returned a success status, the product should be removed from the queue. If not, the product will be processed 
  in the next scheduled time.

##Status
- Accepted
