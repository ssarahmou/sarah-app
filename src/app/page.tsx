'use client'


import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from 'sonner';
import CustomDrawer from './CustomDrawer';
 

 
function MyToast() {
  return <button onClick={() => toast('This is a sonner toast')}>Render my toast</button>;
}

import { z } from "zod"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export default function Home() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast('$100,000 purchase made on ' + values.username + ' submitted successfully!');
    console.log(values);
  }

    return (
      <div className=" h-screen items-center flex justify-center">
      <div className="flex flex-col items-center justify-center  mx-auto max-w-3xl">
        
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-full justify-center items-center">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Credit card number + expiry date + CVV</FormLabel>
                <FormControl>
                  <Input placeholder="Input info here" {...field} />
                </FormControl>
                <FormDescription>
                  Dw about it so chill
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <CustomDrawer />

    </div>
    </div>
  )
  
    


}
