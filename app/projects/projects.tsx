"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    try {
      const response = await fetch("https://api.github.com/users/OmarSameh2001/repos?sort=pushed&direction=desc")
      const data = await response.json()
      return data
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  useEffect(() => {
    async function fetchDataAndSetRepos() {
      try {
        setLoading(true)
        const result = await fetchData()
        setRepos(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDataAndSetRepos()
  }, [])

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? // Loading skeletons
              Array(6)
                .fill(0)
                .map((_, index) => (
                  <Card key={`skeleton-${index}`} className="h-[200px]">
                    <CardHeader>
                      <Skeleton className="h-8 w-3/4" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                  </Card>
                ))
            : repos.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{repo.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{repo.description || "No description available"}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
        </div>
      </div>
    </section>
  )
}
