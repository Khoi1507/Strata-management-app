"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ContactForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get any pre-filled values from URL query parameters (GET method)
  const defaultName = searchParams.get("name") || ""
  const defaultEmail = searchParams.get("email") || ""
  const defaultSubject = searchParams.get("subject") || ""
  const defaultMessage = searchParams.get("message") || ""
  const defaultPriority = searchParams.get("priority") || "normal"

  // Handle POST form submission
  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast({
        title: "Message sent successfully",
        description: "We'll get back to you as soon as possible.",
      })

      // The API will handle the redirect
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  // Handle GET form submission (creates a URL with query parameters)
  const handleGetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const queryParams = new URLSearchParams()

    // Add form data to query parameters
    formData.forEach((value, key) => {
      queryParams.append(key, value.toString())
    })

    // Redirect to the confirmation page with query parameters
    router.push(`/contact/confirmation?${queryParams.toString()}`)
  }

  return (
    <Tabs defaultValue="post">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="post">POST Method</TabsTrigger>
        <TabsTrigger value="get">GET Method</TabsTrigger>
      </TabsList>

      <TabsContent value="post">
        <form onSubmit={handlePostSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="post-name">Name</Label>
            <Input id="post-name" name="name" defaultValue={defaultName} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="post-email">Email</Label>
            <Input id="post-email" name="email" type="email" defaultValue={defaultEmail} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="post-subject">Subject</Label>
            <Input id="post-subject" name="subject" defaultValue={defaultSubject} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="post-message">Message</Label>
            <Textarea id="post-message" name="message" rows={4} defaultValue={defaultMessage} required />
          </div>

          <div className="space-y-2">
            <Label>Priority</Label>
            <RadioGroup defaultValue={defaultPriority} name="priority">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="post-low" />
                <Label htmlFor="post-low">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="post-normal" />
                <Label htmlFor="post-normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="post-high" />
                <Label htmlFor="post-high">High</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message (POST)"}
          </Button>

          <p className="text-xs text-muted-foreground mt-2">
            POST method sends data in the request body, not visible in the URL. The server will redirect after
            processing.
          </p>
        </form>
      </TabsContent>

      <TabsContent value="get">
        <form onSubmit={handleGetSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="get-name">Name</Label>
            <Input id="get-name" name="name" defaultValue={defaultName} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="get-email">Email</Label>
            <Input id="get-email" name="email" type="email" defaultValue={defaultEmail} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="get-subject">Subject</Label>
            <Input id="get-subject" name="subject" defaultValue={defaultSubject} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="get-message">Message</Label>
            <Textarea id="get-message" name="message" rows={4} defaultValue={defaultMessage} required />
          </div>

          <div className="space-y-2">
            <Label>Priority</Label>
            <RadioGroup defaultValue={defaultPriority} name="priority">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="get-low" />
                <Label htmlFor="get-low">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="get-normal" />
                <Label htmlFor="get-normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="get-high" />
                <Label htmlFor="get-high">High</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message (GET)"}
          </Button>

          <p className="text-xs text-muted-foreground mt-2">
            GET method sends data as URL parameters, visible in the address bar. Not recommended for sensitive
            information.
          </p>
        </form>
      </TabsContent>
    </Tabs>
  )
}
