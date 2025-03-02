import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import ContactTextArea from "./contact-textarea";
import ContactInput from "@/components/contact/components/contact-input";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string()
    .min(3, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  message: z.string()
  .min(1, { message: "Message is required" })
});

const ContactForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "Hello, Let's connect!"
    },
  })

  const formRef = useRef<HTMLFormElement | null>(null)

  const onSubmit = async () => {

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current, 
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        }
      )
      toast.success("Message sent!", {
        description: (
          <p className="text-popover-foreground">
            Thank you for reaching out. I'll get back to you as soon as possible!
          </p>
        ),
      });
      form.reset()
    } catch (error) {
      console.error("ERROR: ", error);
      toast.error("Oops! Something went wrong.", {
        description: (
          <p className="text-popover-foreground">
            Please check your details and try again. If the issue persists, reach out via email.
          </p>
        ),
      });
    }
  }

  return ( 
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" ref={formRef}>
       <fieldset className="w-full flex flex-col gap-4">
        <legend className="sr-only">Personal Information</legend>
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <ContactInput
                  label="Name"
                  type="text"
                  error={fieldState.error}
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <ContactInput
                  label="Email"
                  type="text"
                  error={fieldState.error}
                  placeholder="johndoe@mail.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
         {/* Email Field */}
         <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <ContactTextArea
                  label="Message"
                  error={fieldState.error}
                  placeholder="Hello, Let's connect!"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
          <Button 
            variant="custom"
            type="submit" 
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting 
              ? <div className="inline-flex items-center justify-center gap-1">
                  <Loader2 className="animate-spin" /> 
                  <p>Sending...</p>
                </div>
              : "Send"
            }
          </Button>
        </fieldset>
      </form>  
    </Form>
   
   );
}
 
export default ContactForm;