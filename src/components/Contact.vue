<template>
    <div id="contact">
        <div class="left-side">
          <div class="address">
            <h1>Contact Us</h1>
            <h3>Aadivimb Trust Office</h3>
            <p>A-101, Deen Dayal Nagar, Gwalior, Madhya Pradesh, 474020 
              <br>
              <strong>Tel</strong> : 1800 234 45677
            </p>
          </div>
        </div>
        <div class="right-side">
            <v-form
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
              class="form"
            >
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-textarea
                v-model="description"
                :rules="descriptionRules"
                label="Description"
                rows="2"
                required
              ></v-textarea>

              <v-btn
                
                color="#4caf50"
                style="color:white;"
                class="mr-4"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-form>
        </div>
    </div>  
</template>


<script>
  export default {
    name : 'ContactUs',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
<style scoped>
    #contact{
        background: white;
        width: 100vw;
        min-height: 400px;
        display: flex;
    }
    .left-side{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right-side{
      width: 50%;
      /* background-color: red; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .address h1{
      font-size: 3rem;
      font-weight: 700;
      color: rgb(40, 44, 52);
    }
    .address > h1::after{
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      background: #4caf50;
      margin-left: 5px;
    }
    .address h3{
      font-size: 2rem;
      font-weight: 500;
      color:rgb(40, 44, 52);
    }
    .form{
      width:60%; 
      background:whitesmoke; 
      height:80%; 
      padding:15px;
      border-radius: 5px;
      -webkit-box-shadow: 0 10px 10px -6px #777;
      -moz-box-shadow: 0 10px 10px -6px #777;
      box-shadow: 0 10px 10px -6px #777;
      overflow: hidden;
    }

    @media screen and (max-width: 500px) {
      #contact{
        display: block;
      }
      .left-side,.right-side{
        width: 100%;
      }
    }
</style>