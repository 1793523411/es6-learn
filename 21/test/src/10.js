import postal from 'postal/lib/postal.lodash'
export default function publish(topic,channel){
    return function(target,name,descriptor){
        const fn = descriptor.value

        descriptor.value = function(){
            let value = fn.apply(this, arguments)
            postal.channel(channel || target.channel || "/")
            .publish(topic,value)
        }
    }
}