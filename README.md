## Ello Technical Test
This repository contains my code submission for the [Ello Take Home Test](https://github.com/ElloTechnology/backend_takehome).

### Technologies
The solution is in the following technologies:
- NodeJS
- TypeScript
- GraphQL
- Apollo
- Jest
- Babel
- Terraform
- AWS
- Docker

### Setting Up Infrastructure.
**NB:** Ensure you have terraform installed on your system
1. Change directory into terraform director:
    ```
   cd terraform
   ```
2. Initialize terraform.
    ```
    terraform init
   ```
3. Just as a sanity check, check what resources will be created on AWS. 
    ```
    terraform plan
    ```
4. Provision the infrastructure on AWS.
    ```
    terraform apply
   ```
5. **(Optional)** Once done with the testing, to avoid incurring costs, delete the infrastructure using:
    ```
    terraform destroy
   ```

6. You can access the api through the URL provided when the `terraform apply` is run.


### Author
- Kelyn Njeri
- Email: [kelyn.njeri@gmail.com](mailto:kelyn.njeri@gmail.com)


