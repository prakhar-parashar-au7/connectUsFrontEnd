import axios from 'axios'



export const  userInfoToDB = (userInfo) => {
    console.log(userInfo)
    return  async (dispatch) => {  
        await axios({
        method: 'post',
        url: 'userRegistration',

        data: {
            email: userInfo.email,
            userName: userInfo.userName,
            password: userInfo.password,
            profilePic : userInfo.registerPhotoId
        }
    })
        .then((response) => {
            alert(response.data.message)
        },
            (error) => {
                console.log(error)
            })

            return dispatch(userRegistered)

}
}


const userRegistered = {
      type : "USER_REGISTERED"
}






export const userLoggingIn = (userInfo) => {
    return async (dispatch) => {
        return axios({
            method : 'post',
            url : 'userLogin',
            data : {
                userName : userInfo.userName,
                password : userInfo.password
            }
        }).then((response) => {
            console.log(response.data.message)
             localStorage.setItem("token", response.data.token)
             axios.defaults.headers.common = {'Authorization': `bearer ${response.data.token}`}  
             console.log(response.data.user)         
             dispatch(userLoggingActionCreator(response.data.user))                      
        })
    }
}


export const userLoggingActionCreator = (user) => {
    return {
        type : "CREATE_USER_SESSION",
        payload : {
        user
    }
}
}

export const getLoggedInUserInfo = (userId) => {
    console.log("he")
    return async (dispatch) => {
        return axios({
            method : 'post',
            url : 'loggedInUserInfo',
            data : {
                userId : userId
            }
        }).then((response) => {
            console.log(response) 
           dispatch(userLoggingActionCreator(response.data))
         })

}
}